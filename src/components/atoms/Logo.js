import React from 'react'
import PropTypes from 'prop-types'

import AboutYouLogo from '../../assets/svgs/aboutyou_logo.svg'
import OttoLogo from '../../assets/svgs/otto_logo.svg'
import XingLogo from '../../assets/svgs/xing_logo.svg'
import VWLogo from '../../assets/svgs/volkswagen_logo.svg'
import ZalandoLogo from '../../assets/svgs/zalando_logo.svg'
import SinnerSchraderLogo from '../../assets/svgs/sinnerschrader_logo.svg'

const logos = {
  AboutYou: AboutYouLogo,
  OTTO: OttoLogo,
  SinnerSchrader: SinnerSchraderLogo,
  Xing: XingLogo,
  Volkswagen: VWLogo,
  Zalando: ZalandoLogo,
}

const Logo = ({ className, name }) => {
  const Logo = logos[name] || 'div'

  return <Logo className={className} />
}

Logo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
}

export default Logo
