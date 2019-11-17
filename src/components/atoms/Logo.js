import React from 'react'
import PropTypes from 'prop-types'

import AboutYouLogo from '../../assets/svgs/aboutyou_logo.svg'
import BerenbergLogo from '../../assets/svgs/berenberg_logo.svg'
import EPlusLogo from '../../assets/svgs/eplus_logo.svg'
import ErgoLogo from '../../assets/svgs/ergo_logo.svg'
import InfocentricLogo from '../../assets/svgs/infocentric_logo.svg'
import LeicaGeosystemsLogo from '../../assets/svgs/leica_geosystems_logo.svg'
import OttoLogo from '../../assets/svgs/otto_logo.svg'
import ReiffeisenLogo from '../../assets/svgs/raiffeisen_logo.svg'
import SinnerSchraderLogo from '../../assets/svgs/sinnerschrader_logo.svg'
import TVSpielfilmLogo from '../../assets/svgs/tvspielfilm-logo.svg'
import XingLogo from '../../assets/svgs/xing_logo.svg'
import VWLogo from '../../assets/svgs/volkswagen_logo.svg'
import ZalandoLogo from '../../assets/svgs/zalando_logo.svg'

const logos = {
  AboutYou: AboutYouLogo,
  Berenberg: BerenbergLogo,
  EPlus: EPlusLogo,
  Ergo: ErgoLogo,
  Infocentric: InfocentricLogo,
  LeicaGeosystems: LeicaGeosystemsLogo,
  OTTO: OttoLogo,
  Reiffeisen: ReiffeisenLogo,
  SinnerSchrader: SinnerSchraderLogo,
  TVSpielfilm: TVSpielfilmLogo,
  Xing: XingLogo,
  Volkswagen: VWLogo,
  Zalando: ZalandoLogo,
}

const Logo = ({ name, ...rest }) => {
  const Logo = logos[name] || 'div'

  return <Logo {...rest} />
}

Logo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
}

export default Logo
