
import Head from 'next/head'
import styles from "@/styles/Common.module.scss"
import Script from 'next/script'

interface Ipops {
    title: string
    desc?: string
    css?: string
    js?: string
    children: JSX.Element | JSX.Element[]
}
const PageWrapper = (props: Ipops) => {
    const { title, desc = '', css = '', js = '', children } = props

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta name="viewport" content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/next.svg' />
                <style>{css}</style>
            </Head>
            <main className={styles.container}>
                {children}
            </main>
            <Script id='page-js'>{js}</Script>
        </>
    )
}
export default PageWrapper