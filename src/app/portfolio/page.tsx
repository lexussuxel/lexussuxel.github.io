"use client"
import React from "react";
import { MainHeader } from "../components/UI-KIT";
import { AllWebsWrapper, Divider, MyFrame, MyWebWrapper } from "./styles";
import Link from "next/link";

interface IWEB { 
    desc: string;
    title: string;
    href: string;
}

const my_webs: IWEB[] = [
    {
        title: 'Beam calc',
        desc: 'This project is about lala topola...',
        href: 'https://beamcalc.net/'
    }, 
    {
        title: 'Game',
        desc: 'This project is about lala topola...',
        href: 'https://lexussuxel.github.io/game-fight/'
    }, 
    {
        title: 'Crypto currency pid',
        desc: 'This project is about lala topola...',
        href: 'https://lexussuxel.github.io/testTaskCrypto/'
    },  
    {
        title: 'Note application',
        desc: 'This project is about lala topola...',
        href: 'https://adorable-squirrel-d16ddb.netlify.app/'
    }
]

export default function Portfolio() {
  return (
    <>
        <MainHeader>My portfolio</MainHeader>
        <p>These works were eplemented while I was working on freelance or learning some new tools.</p>
        <AllWebsWrapper>
        {my_webs.map((web, i)=> <MyWebWrapper key={i}>
            <Link href={web.href}>
                <MyFrame src={web.href} height="600" name="iframe" title={web.title} scrolling="no" myName={web.title}></MyFrame>
            </Link>
            <Divider/>
            <p>{web.desc}</p>
        </MyWebWrapper>)}
        </AllWebsWrapper>
    </>
  )
}
