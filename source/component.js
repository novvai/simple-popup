export class ComponentLoader {
    load(componentPath) {
        this.normalize(componentPath);
        return new Promise((resolve,reject)=>{
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(this.responseText);
                }
            };
            xhttp.open("GET", this.componentPath, true);
            xhttp.send();
        });
    }

    normalize(path) {
        this.componentPath = path;
        let p = this.componentPath.split('.');
        try {
            if (p[p.length - 1] !== 'html') {
                this.componentPath = `${this.componentPath}.html`
            }
        } catch (e) {
            console.log(e);
        }
    }
}