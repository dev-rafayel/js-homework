class StorageProvider {
    constructor()
    {
        if (typeof this.upload !== 'function' || typeof this.download !== 'function') 
        {
            throw new Error("Expected a function.");
        }
    }

    upload (file) {}
    download (filename) {}
}

class LocalStorage extends StorageProvider {
    upload(file)
    {
        console.log(`Uploading ${file}, please wait...`);
    }

    download (filename) 
    {
        console.log(`Downlading ${filename}, please wait...`);
    }
}

class CloudStorage extends StorageProvider {
    upload (file)
    {
        console.log(`Uploading ${file} to the cloud...`);
    }


    download (filename) 
    {
        console.log(`Downlading ${filename} from the cloud...`);
    }
}

function useStorage(provider) {}