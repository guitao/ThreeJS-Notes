/** * @author alteredq / http://alteredqualia.com/ *//** * @classdesc 场景对象工具集 * @constructor */THREE.SceneUtils = {    /**     * @desc 创建一种新的Objec3D对象,每个网格对象对应一种材质<br />     * 这里和一个网格的每个面使用Meshfacematerial 材质不同.这种方式适用于网格对象在线框和着色几种材质之间变换频繁     * @param {THREE.Geometry} geometry 几何对象     * @param {THREE.Material} materials 材质对象     * @returns {THREE.Object3D}     */    createMultiMaterialObject: function ( geometry, materials ) {        var group = new THREE.Object3D();        for ( var i = 0, l = materials.length; i < l; i ++ ) {            group.add( new THREE.Mesh( geometry, materials[ i ] ) );        }        return group;    },    /**     * @desc 将子对象(参数child)从父对象中删除(参数parent),并重新将子对象添加到场景中.     * @param {THREE.Object3D} child 子对象     * @param {THREE.Object3D} parent 父对象     * @param {THREE.Scene} scene 场景对象     */    detach: function ( child, parent, scene ) {        child.applyMatrix( parent.matrixWorld );        parent.remove( child );        scene.add( child );    },    /**     * @desc 将子对象冲场景中移除，加入父对象中     * @param {THREE.Object3D} child 子对象     * @param {THREE.Scene} scene 场景对象     * @param {THREE.Object3D} parent 父对象     */    attach: function ( child, scene, parent ) {        var matrixWorldInverse = new THREE.Matrix4();        matrixWorldInverse.getInverse( parent.matrixWorld );        child.applyMatrix( matrixWorldInverse );        scene.remove( child );        parent.add( child );    }};