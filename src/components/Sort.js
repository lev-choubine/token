import Swipe from './Swipe'

function Sort(props) {
    

    // console.log(props);
    // const printAllUsers = props.user.map((p, index) => {
    //     return <div>
    //             {/* <p>{p.name}</p>
    //             <button onClick={handleSendMessage} className="send-message-button">
    //                 Like
    //             </button>  */}
    //             <Swipe name={p.name} id={p._id} me={props.me} pic={p.image_url}/>
    //         </div>
    // })
    const randomUser = props.user && props.user.length ? props.user[0] : ''
    return(
        <div>
            <Swipe user={randomUser}/>
         
            {/* <p>{props.name}</p> */}
        </div>
    )
}

export default Sort;