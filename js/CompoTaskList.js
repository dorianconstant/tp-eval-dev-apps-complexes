class CompoTaskList {
    /**
     * @class
     * @summary Composant qui affiche une liste de tâches
     * Les paramètres obligatoire, à transmettre sous la forme
     * d'un objet, sont :
     * - task : objet Task à afficher
     * - element : objet HTMLElement du DOM dans lequel
     *   le code HTML doit être affiché
     * @param {*} param Objet de paramétrage
     * @example
     * let tk = new Task('test', null);
     * let compoTk = new CompoTask({
     *    task: tk,
     *    element: document.getElementById('task')
     * }) 
     * compoTk.render();
     */
    constructor(param) {
        this.param = param;
    }

    /**
     * @method
     * @returns Retourne la liste de tâches passée en paramètre au constructeur
     */
    getTaskList() {
        return this.param.taskList;
    }

    /**
     * @method
     * @returns Retourne l'élément du DOM passé en paramètre au constructeur
     */
    getElement() {
        return this.param.element;
    }

    /**
     * Créer une variable children contenant un tableau vide
     * Si l'élément du DOM passé en paramètre au constructeur existe :
     *      il l'affiche dans la console
     *      puis il boucle autant de fois qu'il y a de tâches dans la liste
     *      il stocke une div dans la variable (let) item
     *      il ajoute l'enfant item à la div
     *      il créer un objet
     */
    render() {
        let children = [];
        if (this.param.taskList) {
            console.log(this.param.taskList);
            for (let i = 0; i < this.param.taskList.getTasks().length; i++) {
                let item = document.createElement('div');
                this.param.element.appendChild(item);
                new CompoTask({
                    task: this.param.taskList.getTasks()[i],
                    element: item}).render();
            }
        }
    }
}