import { injectGlobal } from 'styled-components'

import normalize from 'ruucm-blocks/libs/normalize'

import FuturaPTWeb from 'ruucm-blocks/css-patterns/fonts/FuturaPTWeb'
import Omnes from 'ruucm-blocks/css-patterns/fonts/Omnes'


injectGlobal`
    ${normalize}
    ${FuturaPTWeb}
    ${Omnes}
`