import WaveWrapper from './WaveWrapper/WaveWrapper';
import List from './list/List';
import Information from './Information/Information';
import Var from './Var/Var';
import styles from './Main.module.css';

function Main() {
    return (
            <div className={styles.section}>
                <WaveWrapper /> 
                <div className={styles.main}>
                    <List className={styles.List} />
                    <div className={styles.music_img}>이미지</div>
                    <Information className={styles.Information}/>
                    <Var className={styles.Var}/>
                </div>
            </div>
    );
}

/*
var http = require('http'),
    fileSystem = require('fs'),
    path = require('path'),
    util = require('util');

http.createServer(function(request, response) {
    var filePath = '/Users/data/노을.mp3';
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to util.pump()
    util.pump(readStream, response);
})
.listen(2000);
*/

export default Main;