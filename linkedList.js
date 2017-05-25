/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
      var head=null;
      var tail= null;

      function getHead(){
        return head;
      }
      function getTail(){
        return tail;
      }

      function add(value){
        var newNode={
          value:value,
          next:null
        }

        if (head===null ){
          tail=newNode;
          head=newNode;
        }else if(tail.next===null){
          tail=newNode;
      }
        return newNode;
  };


      function remove(number){

      }
      function get(number){

      }
      function insert(value,number){

      }


  return{
    getHead:getHead,
    getTail:getTail,
    add:add,
    remove:remove,
    get:get,
    insert:insert,
  }
};
