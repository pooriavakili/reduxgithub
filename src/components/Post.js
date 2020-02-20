import React from 'react'
export default function Post({props}) {
return(
    <article  message={props.message}>
<h1>{props.message}</h1>
    </article>
)
}

