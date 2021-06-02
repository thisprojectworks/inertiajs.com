import React from 'react'
import { A, Code, H1, Layout, P } from '@/Components'

const meta = {
  title: 'inertia-laravel@v0.2.4',
}

const Page = () => {
  return (
    <>
      <H1>inertia-laravel@v0.2.4</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on January 4, 2020</div>
      <P>
        Improve handling of lazily evaluated <Code>Responsable</Code> props (
        <A href="https://github.com/inertiajs/inertia-laravel/pull/95">#95</A>).
      </P>
      .
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page