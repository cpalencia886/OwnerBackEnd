function addOffice(req, res) {
    const officeData = req.body;
    const office = new Office(officeData.address, officeData.squareFootage, officeData.capacity, officeData.access, officeData.price);
    db.collection('offices').insertOne(office, (err, result) => {
        if (err) {
            console.error('Error inserting office listing:', err);
            res.status(500).send('Error inserting office listing');
            return;
        }
        console.log('Office listing inserted successfully');
        res.status(200).json(office);
    });
}

function updateOffice(req, res) {
    const officeData = req.body;
    const officeId = req.params.id; 
}

module.exports = {
    addOffice,
    updateOffice
};
