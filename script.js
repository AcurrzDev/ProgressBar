

const fetchUsers = () => {
    axios
        .get('https://kick.com/api/v1/channels/fousey')
        .then(response => {
            fetch('./ChannelInfo.json').then(responses => {
                responses.json().then(json => {
                    let viewer_count = response.data.followersCount
                    document.getElementById('view-count').textContent = `${viewer_count}/${json.goal}`
                    let percent = (viewer_count/json.goal)*100

                    console.log(percent)

                    if (percent>100){
                        percent=100
                    }

                    document.getElementById('progress-bar').style.width = `${percent}%`
                })

            })
        })
        .catch(error => console.error(error))
}

setInterval(fetchUsers, 1000);