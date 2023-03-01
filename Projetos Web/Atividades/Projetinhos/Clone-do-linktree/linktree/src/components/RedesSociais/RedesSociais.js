import './RedesSociais.css'

const RedesSociais = () => {

    const ListaRedes = [
        {id: 1 , urlNome: 'Instagram', url: 'https://www.instagram.com/armando_souz/'},
        {id: 2 , urlNome: 'Twitter', url: 'https://twitter.com/CondeArmand3'},
        {id: 3 , urlNome: 'Discord', url: 'https://discord.gg/hxF3dnPA5T'},
        {id: 4 , urlNome: 'GitHub', url: 'https://github.com/CondeArmand/My-projects'}
    ]

    const LinksRedes = ListaRedes.map((props) =>
    <div key={props.id} className={'conteudo_links'}>
        <div className={'container'}>
           <div className={'animated-border'}></div>
               <div className={'corner'}>
                   <div className={'content'}>
                       <a href={props.url}>{props.urlNome}</a>
                   </div>
               </div>
        </div>
    </div> )

    return (
        <>
            {LinksRedes}
        </>
    )
}
export default RedesSociais