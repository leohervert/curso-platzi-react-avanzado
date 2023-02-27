import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Detail = () => {
  const params = useParams()
  const { detailId } = params
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
