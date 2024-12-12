import { Content, fetchOneEntry } from "@builder.io/sdk-react";
import { BlockComponent, CustomTabsComponent, TableComponent } from "./builder-registry";

export default async function Page(props) {
  console.log('API KEY', process.env.NEXT_PUBLIC_BUILDER_API_KEY);

  const urlPath = '/' + (props.params?.slug?.join('/') || '');

  const { content } = await fetchOneEntry({
    options: props.searchParams,
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
    model: "page",
    includeRefs: true,
    userAttributes: { urlPath },
  });

  return (
    <Content
      content={content}
      apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY}
      model={"page"}
      customComponents={[
        BlockComponent,
        CustomTabsComponent,
        // TableComponent
      ]}
    />
  );
}
