// наполняет таблицу записями при старте

async function fetch_events(){
    return await fetch('/api/v1/get_event',{
    method: 'GET',
    }
    ).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            console.log(`Response error: ${response.text()}`);
            throw new Error(`Server response status code ${response.status}`);
        }
    }).catch((error) => {
        console.log(`Upload error: ${error.message}`);
        return None
    })
}

async function populate_table(){
    
    var $table = $('#table')
    event_data = await fetch_events()
    console.log(event_data)

    $(document).ready( () =>
        $table.bootstrapTable({ 
        data: event_data 
        })
    ); 
}


populate_table()