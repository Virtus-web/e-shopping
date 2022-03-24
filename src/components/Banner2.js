import '../styles/banner.css'

function Banner({children}) {

    return (
        <div>
            <div className='lmj-banner'>{children}</div>
        </div>
    )
}

export default Banner