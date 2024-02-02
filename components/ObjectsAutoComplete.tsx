// 'use client'
//
// import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
//
// import {
//   Autocomplete,
//   AutocompleteItem,
//   AutocompleteProps
// } from '@nextui-org/react'
// import { FIND_MANY_OBJECT } from '@/gql/gqls'
// import { Object, Query, QueryFindManyObjectArgs } from '@/gql/types/graphql'
// import { getClient } from '@/lib/client'
//
// const ObjectsAutoComplete = ({
//   ...autocompleteProps
// }: Omit<AutocompleteProps, 'children'>) => {
//   // const { data } = getClient().query<Query, QueryFindManyObjectArgs>({
//   //   query: FIND_MANY_OBJECT
//   // })
//
//   return (
//     <Autocomplete
//       // defaultItems={data.findManyObject as Object[]}
//       // selectionMode='single'
//       {...autocompleteProps}
//     >
//       {(object: Object) => (
//         <AutocompleteItem key={object.title}>{object.title}</AutocompleteItem>
//       )}
//     </Autocomplete>
//   )
// }
//
// export default ObjectsAutoComplete
