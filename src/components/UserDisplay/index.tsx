import { ReposType, UserType } from '../../types/types'
import * as C from './styles'

import GeoImg from '../../svgs/geo.svg'
import EmailImg from '../../svgs/envelope.svg'
import SiteImg from '../../svgs/globe.svg'
import RepositoryItem from '../RepositoryItem'
import { fullDate } from '../../helpers/dateFormat'

type Props = {
    data: {
        user: UserType,
        repos: ReposType[]
    }
}

export default ({ data }: Props) => {
    return (
        <C.Container>
            <C.Info>
                <img src={data.user.avatar_url} alt="imagem de perfil" />
                <C.Personal>
                    <C.PersonalTop>
                        <a href={data.user.html_url} target="_blank">
                            <h2>{data.user.name}</h2>
                        </a>
                        <p>{data.user.bio}</p>
                        <C.PersonalNumbers>
                            <div><span>{data.user.followers}</span> Followers</div>
                            <div><span>{data.user.following}</span> Following</div>
                            <div><span>{data.user.public_repos}</span> Public Repos</div>
                        </C.PersonalNumbers>
                    </C.PersonalTop>
                    <C.PersonalBottom>
                        <li><img src={GeoImg} alt="location" />{data.user.location ?? '---'}</li>
                        <a href={`https://${data.user.blog}`} target="_blank"><li><img src={SiteImg} alt="website" />{data.user.blog ?? '---'}</li></a>
                        <a href={`mailto:${data.user.email}`} target="_blank"><li><img src={EmailImg} alt="email" />{data.user.email ?? '---'}</li></a>
                    </C.PersonalBottom>
                </C.Personal>
            </C.Info>
            <C.RepoTitle>
                Repositories <span>Last Update: {fullDate(data.user.updated_at)}</span>
            </C.RepoTitle>
            <C.Repositories>
                {data.repos.map((item, index) => (
                    <RepositoryItem key={index} data={item} />
                ))}
            </C.Repositories>
        </C.Container>
    )
}