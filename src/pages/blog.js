import React from "react";

import Layout from "../components/layout";
import Link from "gatsby-link";
import SEO from "../components/seo";

const BlogPage = ({ data }) => (
    <Layout>
        <SEO title="Blog" />
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div
                key={post.node.id}
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h3>{post.node.frontmatter.title}</h3>
                <small
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    Posted by {post.node.frontmatter.author} on{" "}
                    {post.node.frontmatter.date}
                </small>
                <Link
                    to={post.node.frontmatter.path}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    Read More
                </Link>
                <hr />
            </div>
        ))}
    </Layout>
);

export const PageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`;

export default BlogPage;
