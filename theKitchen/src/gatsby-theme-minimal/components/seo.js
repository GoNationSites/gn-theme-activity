/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO({ description, lang, meta, title, keywords }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} In Prospect ${description ? `| ${description}` : ''}`}
      titleTemplate={``}
      meta={[
        {
          name: `description`,
          content: description ? description : '',
        },
        {
          property: `og:title`,
          content: title ? title : '',
        },
        {
          property: `og:description`,
          content: description ? description : '',
        },
        {
          property: `keywords`,
          content: keywords ? keywords : '',
        },

        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'Gonation',
        },
        {
          name: `twitter:title`,
          content: title ? title : '',
        },
        {
          name: `twitter:description`,
          content: description ? description : '',
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  title: ``,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
