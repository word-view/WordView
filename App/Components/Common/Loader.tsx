import { memo } from 'react'
import { ActivityIndicator } from 'react-native-paper'

interface LoaderProps {
  loading: boolean
  children: any
}

function $Loader(props: LoaderProps) {
  if (props.loading) {
    return <ActivityIndicator animating={true} color='#DDD8DD' size={'large'} />
  } else {
    return props.children
  }
}

export const Loader = memo($Loader)
