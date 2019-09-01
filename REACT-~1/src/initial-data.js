const initialData = {
     tasks : {
         'task-1' : { id : 'task-1' , content :'Take out the garbage' },
         'task-2' : { id : 'task-2' , content :'watch my ' },
         'task-3' : { id : 'task-3' , content :'change' },
         'task-4' : { id : 'task-4' , content :'cook dinner' },
     },
    columns: {
        'column-1' : {
            id : 'colum-1',
            title : 'To do',
            taskIds :  ['task-1', 'task-2','task-3','task-4']

        },
    },

    columnOrder : ['column-1'],
    
}
export default initialData;