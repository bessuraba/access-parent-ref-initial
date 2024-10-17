'use client'

import React, { HTMLAttributes, useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Context } from './context'

export const Frame = styled(motion.div)`
    height: 100%;
    background-color: darkcyan;
    width: 250vw;
    position: relative;
    display: grid;
    grid-row: 1;
    grid-column: 2;
    grid-template-columns: 1fr 2fr;
    column-gap: 10px;

    & > div {
        background-color: white;
    }

    & > div:last-child {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        overflow: hidden;

        & > div {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const Sticky = styled(motion.div)`
    position: sticky;
    top: 10px;
    left: 0;
    width: 100%;
    padding: 10px;
    height: calc(100vh - 20px);
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: cadetblue;
`

export type Props = HTMLAttributes<HTMLDivElement>

export const Component = styled(({
    className,
    children
}: Props) => {
    const scroll = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        if (window && window.innerWidth && !width) {
            setWidth(window.innerWidth)
        }
    }, [width])

    const { scrollYProgress } = useScroll({
        target: scroll
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, (width * -1.5) + 30])

    return (
        <motion.div
            id='packages-scroll'
            ref={scroll}
            className={className}>
            <Sticky>
                <Frame style={{ x }}>
                    <Context.Provider value={scroll}>
                        {children}
                    </Context.Provider>
                </Frame>
            </Sticky>
        </motion.div>
    )
})<Props>`
    width: 100%;
    height: 300vh;
    background-color: cornflowerblue;
    box-sizing: border-box;
    position: relative;
    margin: 10px 0;
    padding: 10px;
`