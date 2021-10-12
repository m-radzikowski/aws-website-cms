import * as React from "react";
import {graphql} from "gatsby";
import {RichText} from "prismic-reactjs";

const pageStyles = {
    margin: 0,
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
};

const IndexPage = ({data}) => {
    if (!data) return null;
    const document = data.prismicHome.data;

    return (
        <main style={pageStyles}>
            <title>{document.title.text}</title>

            <h1 style={headingStyles}>
                {document.title.text}
            </h1>
            <RichText render={document.intro.raw}/>
        </main>
    );
};

export const query = graphql`
    query Home {
        prismicHome {
            data {
                title {
                    text
                }
                intro {
                    raw
                }
            }
        }
    }
`;

export default IndexPage;
