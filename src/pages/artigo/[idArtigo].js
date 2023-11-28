import React from 'react'

export const artigo = () => {
    const router = useRouter();
    const { idArtigo } = router.query;
  return (
    <div>teste {idArtigo}</div>
  )
}
