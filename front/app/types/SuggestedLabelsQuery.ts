/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SuggestedLabelsQuery
// ====================================================

export interface SuggestedLabelsQuery_search_aggs_buckets {
  __typename: "AggBucket";
  key: string;
  docCount: number;
}

export interface SuggestedLabelsQuery_search_aggs {
  __typename: "Agg";
  name: string;
  buckets: SuggestedLabelsQuery_search_aggs_buckets[];
}

export interface SuggestedLabelsQuery_search {
  __typename: "SearchResultSet";
  aggs: SuggestedLabelsQuery_search_aggs[] | null;
}

export interface SuggestedLabelsQuery_study_wikiPage {
  __typename: "WikiPage";
  nctId: string;
  /**
   * Json key value pairs of meta information
   */
  meta: string;
}

export interface SuggestedLabelsQuery_study {
  __typename: "Study";
  nctId: string;
  wikiPage: SuggestedLabelsQuery_study_wikiPage | null;
}

export interface SuggestedLabelsQuery {
  /**
   * Searches params by searchHash on server and `params` argument into it
   */
  search: SuggestedLabelsQuery_search | null;
  study: SuggestedLabelsQuery_study | null;
}

export interface SuggestedLabelsQueryVariables {
  searchHash: string;
  nctId: string;
}
