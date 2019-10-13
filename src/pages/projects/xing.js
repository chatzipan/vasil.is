import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import ProjectPage from '../../templates/ProjectPage'

const Xing = () => {
  return <ProjectPage isOpen handleClose={() => {}} project="Xing" />
}

ProjectPage.propTypes = {
  isOpen: PropTypes.bool,
}

export default Xing
