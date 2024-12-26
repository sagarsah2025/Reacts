function Hello() {
    let myName = 'prashant';
    let number =456;
    let fullName =() => {
        return 'Prashant Jain';

    }
    return <p>
        MessageNo: {number} I am your master {fullName()}
    </p>
}

export default Hello;