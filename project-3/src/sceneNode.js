/**
 * @class SceneNode
 * @desc A SceneNode is a node in the scene graph.
 * @property {MeshDrawer} meshDrawer - The MeshDrawer object to draw
 * @property {TRS} trs - The TRS object to transform the MeshDrawer
 * @property {SceneNode} parent - The parent node
 * @property {Array} children - The children nodes
 */

class SceneNode {
    constructor(meshDrawer, trs, parent = null) {
        this.meshDrawer = meshDrawer;
        this.trs = trs;
        this.parent = parent;
        this.children = [];

        if (parent) {
            this.parent.__addChild(this);
        }
    }

    __addChild(node) {
        this.children.push(node);
    }

    draw(mvp, modelView, normalMatrix, modelMatrix) {
        /**
         * @Task1 : Implement the draw function for the SceneNode class.
         */
        
        
        // Getting the transformation matrix. (stored in member field)
        var transformationMatrix = this.trs.getTransformationMatrix();

        // Multiplying each parameter with this transformation matrix. 
        var transformedModel = MatrixMult(modelMatrix, transformationMatrix);
        var transformedModelView = MatrixMult(modelView, transformationMatrix);
        var transformedMvp = MatrixMult(mvp, transformationMatrix);
        var transformedNormals = MatrixMult(normalMatrix,transformationMatrix);

        // drawing this object
        if (this.meshDrawer) {
            this.meshDrawer.draw(transformedMvp, transformedModelView, transformedNormals, transformedModel);
        }

        // Recursive call for children nodes.
        for (let child of this.children) {
            child.draw(transformedMvp, transformedModelView, transformedNormals, transformedModel);
        }
    }

    

}