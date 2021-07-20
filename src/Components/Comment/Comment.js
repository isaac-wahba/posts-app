import '../styles.css'

const Comment = ({comment}) => {



    return (
        <div className="Layout row"  key={comment.id}>
            <ol className="ui comments" >
                <h4 className="author">{comment.name}</h4>
                <h5 className="mail">Email: {comment.email}</h5>
                <p className="text">{comment.body}</p>
            </ol>
            <br/>
        </div>
    );
};

export default Comment;
