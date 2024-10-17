'use client'

import styled from 'styled-components'
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from 'framer-motion'
import React, { HTMLAttributes, useContext } from 'react'

import { Context } from './context'

export type Props = HTMLAttributes<HTMLDivElement> & {
    initialPosition?: 'odd' | 'even'
    index?: number
}

export const Component = styled(({
    className,
    initialPosition = 'odd',
    index = 0
}: Props) => {
    const scroll = useContext(Context)

    const {scrollYProgress} = useScroll({
        axis: 'y',
        target: scroll,
        layoutEffect: false
    })

    const spring = useSpring(scrollYProgress, {
        mass: 0.1,
    })

    const x = useTransform(
        spring,
        [0.2 + Math.min(index * 0.1, 0.2), 0.8 + Math.min(index * 0.1, 0.2)],
        [ 163, 0 ]
    )
    const y = useTransform(
        spring,
        [0.2 + Math.min(index * 0.1, 0.2), 0.8 + Math.min(index * 0.1, 0.2)],
        [ (initialPosition === 'odd' ? 352 : -352), 0 ]
    )

    return (<motion.div style={{ x, y }} className={className} />)
})<Props>`
    width: 495px;
    height: 705px;
    background-color: crimson;
`