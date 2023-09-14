import { type } from "os";

export type SearchParams={
    pages?:string;
    sortby:string;
    minprice?:string;
    maxprice?:string;
}

type PageResults ={
    content:Content;
    created_at:string;
    updated_at:string;
    page:number;
    url:string;
    job_id:string;
    status_code:number;
    paeser_type:string;

};
type Content={
    url:string;
    page:number;
    results:Results;
    last_visible_page:number;
    parse_status_code:number;

};
type results ={
    paid:any[];
    filter:Filter[];
    organic:Organic[];
    search_information:{
        query:string;
        showing_results_for:number;

    };

};

type Filter={
    name:string;
    values:Value[];

};

type Value={
    url:string;
    value:string;
};

type Organic={
    pos:number;
    url:string;
    type:string;
    price:number;
    title:string;
    currency:string;
    merchant:{
        url:string;
        name:string;
    };
    price_str:string;
    pos_overall:number;
};
