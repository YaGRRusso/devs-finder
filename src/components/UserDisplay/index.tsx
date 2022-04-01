import { ReposType, UserType } from '../../types/types'
import * as C from './styles'

type Props = {
    data: {
        user: UserType,
        repos: ReposType[]
    }
}

export default ({ data }: Props) => {
    return (
        <C.Container>
            <img src={data.user.avatar_url} alt="foto de perfil" />
            {data.user.name}
            {data.user.login}
        </C.Container>
    )
}