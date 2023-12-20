import { EntryFieldTypes } from "contentful";

export type CfPage = {
  contentTypeId: "page"
  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText
    legacyWordpressContent: EntryFieldTypes.Text
  }
}

export type CfPost = {
  contentTypeId: "post"
  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText
    legacyWordpressContent: EntryFieldTypes.Text
    published: EntryFieldTypes.Date
  }
}

export type CfVMHome = {
  contentTypeId: "homePageViewModelV1"
  fields: {
    version: EntryFieldTypes.Integer;
    title1White: EntryFieldTypes.Text;
    title2Blue: EntryFieldTypes.Text;
    subtitle: EntryFieldTypes.Text;
    tagline1: EntryFieldTypes.Text;
    tagline2: EntryFieldTypes.Text;
    tagline3: EntryFieldTypes.Text;
    tagline4: EntryFieldTypes.Text;
    aboutMeTitle: EntryFieldTypes.Text;
    aboutMe: EntryFieldTypes.RichText;
  }
}

export type CfVMServiceItem = {
  contentTypeId: "serviceItem"
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Text;
    seq: number;
  }
}