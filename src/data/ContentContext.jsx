import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTina, useEditState } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client.ts";
import { content as staticContent } from "./loadContent.js";

const ContentContext = createContext(staticContent);

export const useContent = () => useContext(ContentContext);

const DOCS = [
  ["global", "global.json"],
  ["home", "home.json"],
  ["productsPage", "products-page.json"],
  ["productModules", "product-modules.json"],
  ["addonModules", "addon-modules.json"],
  ["solutions", "solutions.json"],
  ["company", "company.json"],
  ["contact", "contact.json"],
  ["resources", "resources.json"],
  ["footer", "footer.json"],
  ["legal", "legal.json"],
  ["notfound", "notfound.json"],
  ["media", "media.json"],
];

// Tina's GraphQL responses attach `__typename` (and other meta) keys to every
// object. Strip them so shapes match the plain JSON the components expect
// (e.g. Object.entries(footerColumns) must not include `__typename`).
function clean(value) {
  if (Array.isArray(value)) return value.map(clean);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === "__typename") continue;
      out[k] = clean(v);
    }
    return out;
  }
  return value;
}

// Only fetch/bind live Tina data when the editor is active. Public visitors
// render entirely from the bundled static content (no network calls).
export function TinaContentProvider({ children }) {
  const { edit } = useEditState();
  const [res, setRes] = useState({});

  useEffect(() => {
    if (!edit) return undefined;
    let active = true;
    Promise.all(
      DOCS.map(([q, relativePath]) =>
        client.queries[q]({ relativePath })
          .then((r) => [q, r])
          .catch(() => [q, null])
      )
    ).then((entries) => {
      if (active) setRes(Object.fromEntries(entries.filter(([, r]) => r)));
    });
    return () => {
      active = false;
    };
  }, [edit]);

  const globalT = useTina({ query: res.global?.query, variables: res.global?.variables, data: res.global?.data });
  const homeT = useTina({ query: res.home?.query, variables: res.home?.variables, data: res.home?.data });
  const productsPageT = useTina({ query: res.productsPage?.query, variables: res.productsPage?.variables, data: res.productsPage?.data });
  const productModulesT = useTina({ query: res.productModules?.query, variables: res.productModules?.variables, data: res.productModules?.data });
  const addonModulesT = useTina({ query: res.addonModules?.query, variables: res.addonModules?.variables, data: res.addonModules?.data });
  const solutionsT = useTina({ query: res.solutions?.query, variables: res.solutions?.variables, data: res.solutions?.data });
  const companyT = useTina({ query: res.company?.query, variables: res.company?.variables, data: res.company?.data });
  const contactT = useTina({ query: res.contact?.query, variables: res.contact?.variables, data: res.contact?.data });
  const resourcesT = useTina({ query: res.resources?.query, variables: res.resources?.variables, data: res.resources?.data });
  const footerT = useTina({ query: res.footer?.query, variables: res.footer?.variables, data: res.footer?.data });
  const legalT = useTina({ query: res.legal?.query, variables: res.legal?.variables, data: res.legal?.data });
  const notfoundT = useTina({ query: res.notfound?.query, variables: res.notfound?.variables, data: res.notfound?.data });
  const mediaT = useTina({ query: res.media?.query, variables: res.media?.variables, data: res.media?.data });

  const value = useMemo(() => {
    const merged = { ...staticContent };

    const g = clean(globalT.data?.global);
    if (g) {
      if (g.site) merged.site = g.site;
      if (g.navigation) merged.navigation = g.navigation;
      if (g.ui) merged.ui = g.ui;
    }
    const homeDoc = clean(homeT.data?.home);
    if (homeDoc?.home) merged.home = homeDoc.home;
    const p = clean(productsPageT.data?.productsPage);
    if (p) {
      if (p.products) merged.products = p.products;
      if (p.basePackageFeatures) merged.basePackageFeatures = p.basePackageFeatures;
    }
    const pm = clean(productModulesT.data?.productModules);
    if (pm?.productModules) merged.productModules = pm.productModules;
    const am = clean(addonModulesT.data?.addonModules);
    if (am?.addOnModules) merged.addOnModules = am.addOnModules;
    const sol = clean(solutionsT.data?.solutions);
    if (sol?.solutions) merged.solutions = sol.solutions;
    const comp = clean(companyT.data?.company);
    if (comp?.company) merged.company = comp.company;
    const con = clean(contactT.data?.contact);
    if (con?.contact) merged.contact = con.contact;
    const rsc = clean(resourcesT.data?.resources);
    if (rsc?.resources) merged.resources = rsc.resources;
    const f = clean(footerT.data?.footer);
    if (f) {
      if (f.footerColumns) merged.footerColumns = f.footerColumns;
      if (f.footerLegal) merged.footerLegal = f.footerLegal;
    }
    const lg = clean(legalT.data?.legal);
    if (lg?.legal) merged.legal = lg.legal;
    const nf = clean(notfoundT.data?.notfound);
    if (nf?.notFound) merged.notFound = nf.notFound;
    const md = clean(mediaT.data?.media);
    if (md?.images) merged.images = md.images;

    return merged;
  }, [
    globalT.data,
    homeT.data,
    productsPageT.data,
    productModulesT.data,
    addonModulesT.data,
    solutionsT.data,
    companyT.data,
    contactT.data,
    resourcesT.data,
    footerT.data,
    legalT.data,
    notfoundT.data,
    mediaT.data,
  ]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}
