import UploadForm from "../../components/uploadForm/UploadForm";

function UploadPhoto() {
    return (
        <div className="container">
            <h1 style={{textAlign:"center",marginBottom:"20px"}}>
                Завантаження фотографії
            </h1>

            <UploadForm />
        </div>
    );
}

export default UploadPhoto;