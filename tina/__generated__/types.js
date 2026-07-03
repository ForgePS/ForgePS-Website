export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const GlobalPartsFragmentDoc = gql`
    fragment GlobalParts on Global {
  __typename
  site {
    __typename
    name
    tagline
    footerBlurb
    demoEmail
    privacyEmail
    securityEmail
    rmsUrl
    pricingNote
  }
  navigation {
    __typename
    main {
      __typename
      label
      href
    }
    ctaLabel
  }
  ui {
    __typename
    learnMoreLabel
    requestDemoLabel
    exploreRmsLabel
    moduleTagLabel
    exploreProductPrefix
    openLivePlatformLabel
  }
}
    `;
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  home {
    __typename
    heroEyebrow
    heroTitle
    heroLead
    heroBody
    heroBullets
    modulesEyebrow
    modulesTitle
    modulesDescription
    productsEyebrow
    productsTitle
    productsDescription
    whyEyebrow
    whyTitle
    whyDescription
    whyCards {
      __typename
      title
      copy
    }
    closingTitle
    closingDescription
  }
}
    `;
export const ProductsPagePartsFragmentDoc = gql`
    fragment ProductsPageParts on ProductsPage {
  __typename
  products {
    __typename
    heroEyebrow
    heroTitle
    heroDescription
    heroSecondaryLink
    baseEyebrow
    baseTitle
    baseDescription
    addonsEyebrow
    addonsTitle
    addonsDescription
    coreTitle
    coreDescription
  }
  basePackageFeatures
}
    `;
export const ProductModulesPartsFragmentDoc = gql`
    fragment ProductModulesParts on ProductModules {
  __typename
  productModules {
    __typename
    id
    name
    subtitle
    description
    liveLink
  }
}
    `;
export const AddonModulesPartsFragmentDoc = gql`
    fragment AddonModulesParts on AddonModules {
  __typename
  addOnModules {
    __typename
    name
    subtitle
    description
  }
}
    `;
export const SolutionsPartsFragmentDoc = gql`
    fragment SolutionsParts on Solutions {
  __typename
  solutions {
    __typename
    eyebrow
    title
    description
    items {
      __typename
      title
      copy
    }
    closingTitle
    closingDescription
  }
}
    `;
export const CompanyPartsFragmentDoc = gql`
    fragment CompanyParts on Company {
  __typename
  company {
    __typename
    eyebrow
    title
    description
    paragraphs
    closingTitle
    closingDescription
  }
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  __typename
  contact {
    __typename
    eyebrow
    title
    description
    sidebarTitle
    sidebarBody
    quote
    form {
      __typename
      infoHeading
      fields {
        __typename
        name
        label
        placeholder
        required
      }
      agencyHeading
      agencyTypeLabel
      agencyTypes
      agencySizeLabel
      agencySizes
      productLabel
      productOptions
      notesLabel
      notesPlaceholder
      submitLabel
      successTitle
      successBody
    }
  }
}
    `;
export const ResourcesPartsFragmentDoc = gql`
    fragment ResourcesParts on Resources {
  __typename
  resources {
    __typename
    eyebrow
    title
    description
    cards {
      __typename
      title
      copy
      linkLabel
      linkHref
      external
    }
  }
}
    `;
export const FooterPartsFragmentDoc = gql`
    fragment FooterParts on Footer {
  __typename
  footerColumns {
    __typename
    Solutions {
      __typename
      label
      href
    }
    Products {
      __typename
      label
      href
    }
    Resources {
      __typename
      label
      href
    }
    Company {
      __typename
      label
      href
    }
  }
  footerLegal {
    __typename
    links {
      __typename
      label
      href
    }
    copyrightSuffix
  }
}
    `;
export const LegalPartsFragmentDoc = gql`
    fragment LegalParts on Legal {
  __typename
  legal {
    __typename
    lastUpdatedLabel
    lastUpdated
    privacy {
      __typename
      title
      sections {
        __typename
        heading
        body
      }
    }
    terms {
      __typename
      title
      sections {
        __typename
        heading
        body
      }
    }
    security {
      __typename
      title
      sections {
        __typename
        heading
        body
      }
    }
  }
}
    `;
export const NotfoundPartsFragmentDoc = gql`
    fragment NotfoundParts on Notfound {
  __typename
  notFound {
    __typename
    eyebrow
    title
    body
    homeLabel
    contactLabel
  }
}
    `;
export const MediaPartsFragmentDoc = gql`
    fragment MediaParts on Media {
  __typename
  images {
    __typename
    logo
    hero
  }
}
    `;
export const GlobalDocument = gql`
    query global($relativePath: String!) {
  global(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlobalParts
  }
}
    ${GlobalPartsFragmentDoc}`;
export const GlobalConnectionDocument = gql`
    query globalConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlobalFilter) {
  globalConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlobalParts
      }
    }
  }
}
    ${GlobalPartsFragmentDoc}`;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export const ProductsPageDocument = gql`
    query productsPage($relativePath: String!) {
  productsPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProductsPageParts
  }
}
    ${ProductsPagePartsFragmentDoc}`;
export const ProductsPageConnectionDocument = gql`
    query productsPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProductsPageFilter) {
  productsPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProductsPageParts
      }
    }
  }
}
    ${ProductsPagePartsFragmentDoc}`;
export const ProductModulesDocument = gql`
    query productModules($relativePath: String!) {
  productModules(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProductModulesParts
  }
}
    ${ProductModulesPartsFragmentDoc}`;
export const ProductModulesConnectionDocument = gql`
    query productModulesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProductModulesFilter) {
  productModulesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProductModulesParts
      }
    }
  }
}
    ${ProductModulesPartsFragmentDoc}`;
export const AddonModulesDocument = gql`
    query addonModules($relativePath: String!) {
  addonModules(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AddonModulesParts
  }
}
    ${AddonModulesPartsFragmentDoc}`;
export const AddonModulesConnectionDocument = gql`
    query addonModulesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AddonModulesFilter) {
  addonModulesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AddonModulesParts
      }
    }
  }
}
    ${AddonModulesPartsFragmentDoc}`;
export const SolutionsDocument = gql`
    query solutions($relativePath: String!) {
  solutions(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SolutionsParts
  }
}
    ${SolutionsPartsFragmentDoc}`;
export const SolutionsConnectionDocument = gql`
    query solutionsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SolutionsFilter) {
  solutionsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SolutionsParts
      }
    }
  }
}
    ${SolutionsPartsFragmentDoc}`;
export const CompanyDocument = gql`
    query company($relativePath: String!) {
  company(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CompanyParts
  }
}
    ${CompanyPartsFragmentDoc}`;
export const CompanyConnectionDocument = gql`
    query companyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CompanyFilter) {
  companyConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CompanyParts
      }
    }
  }
}
    ${CompanyPartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export const ResourcesDocument = gql`
    query resources($relativePath: String!) {
  resources(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ResourcesParts
  }
}
    ${ResourcesPartsFragmentDoc}`;
export const ResourcesConnectionDocument = gql`
    query resourcesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ResourcesFilter) {
  resourcesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ResourcesParts
      }
    }
  }
}
    ${ResourcesPartsFragmentDoc}`;
export const FooterDocument = gql`
    query footer($relativePath: String!) {
  footer(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FooterParts
  }
}
    ${FooterPartsFragmentDoc}`;
export const FooterConnectionDocument = gql`
    query footerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FooterFilter) {
  footerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FooterParts
      }
    }
  }
}
    ${FooterPartsFragmentDoc}`;
export const LegalDocument = gql`
    query legal($relativePath: String!) {
  legal(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...LegalParts
  }
}
    ${LegalPartsFragmentDoc}`;
export const LegalConnectionDocument = gql`
    query legalConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: LegalFilter) {
  legalConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...LegalParts
      }
    }
  }
}
    ${LegalPartsFragmentDoc}`;
export const NotfoundDocument = gql`
    query notfound($relativePath: String!) {
  notfound(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NotfoundParts
  }
}
    ${NotfoundPartsFragmentDoc}`;
export const NotfoundConnectionDocument = gql`
    query notfoundConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NotfoundFilter) {
  notfoundConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NotfoundParts
      }
    }
  }
}
    ${NotfoundPartsFragmentDoc}`;
export const MediaDocument = gql`
    query media($relativePath: String!) {
  media(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...MediaParts
  }
}
    ${MediaPartsFragmentDoc}`;
export const MediaConnectionDocument = gql`
    query mediaConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MediaFilter) {
  mediaConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...MediaParts
      }
    }
  }
}
    ${MediaPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    global(variables, options) {
      return requester(GlobalDocument, variables, options);
    },
    globalConnection(variables, options) {
      return requester(GlobalConnectionDocument, variables, options);
    },
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    },
    productsPage(variables, options) {
      return requester(ProductsPageDocument, variables, options);
    },
    productsPageConnection(variables, options) {
      return requester(ProductsPageConnectionDocument, variables, options);
    },
    productModules(variables, options) {
      return requester(ProductModulesDocument, variables, options);
    },
    productModulesConnection(variables, options) {
      return requester(ProductModulesConnectionDocument, variables, options);
    },
    addonModules(variables, options) {
      return requester(AddonModulesDocument, variables, options);
    },
    addonModulesConnection(variables, options) {
      return requester(AddonModulesConnectionDocument, variables, options);
    },
    solutions(variables, options) {
      return requester(SolutionsDocument, variables, options);
    },
    solutionsConnection(variables, options) {
      return requester(SolutionsConnectionDocument, variables, options);
    },
    company(variables, options) {
      return requester(CompanyDocument, variables, options);
    },
    companyConnection(variables, options) {
      return requester(CompanyConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    },
    resources(variables, options) {
      return requester(ResourcesDocument, variables, options);
    },
    resourcesConnection(variables, options) {
      return requester(ResourcesConnectionDocument, variables, options);
    },
    footer(variables, options) {
      return requester(FooterDocument, variables, options);
    },
    footerConnection(variables, options) {
      return requester(FooterConnectionDocument, variables, options);
    },
    legal(variables, options) {
      return requester(LegalDocument, variables, options);
    },
    legalConnection(variables, options) {
      return requester(LegalConnectionDocument, variables, options);
    },
    notfound(variables, options) {
      return requester(NotfoundDocument, variables, options);
    },
    notfoundConnection(variables, options) {
      return requester(NotfoundConnectionDocument, variables, options);
    },
    media(variables, options) {
      return requester(MediaDocument, variables, options);
    },
    mediaConnection(variables, options) {
      return requester(MediaConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
