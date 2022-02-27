export default function Error() {
    return (
        <div style={{background:"#222222", minHeight:"100vh"}}>
            <div className="container">
                <h1 className="error" style={{
                    color: "red",
                    fontSize: "50px",
                    justifyContent: "center",
                    display: "flex",
                    paddingTop: "250px",
                    alignItems:"center",
                    cursor:"pointer"
                }}>404
                    not found</h1>
                <p style={{textAlign: "center", color: "blue",cursor:"pointer"}}>на главную</p>
            </div>
        </div>

    )

}