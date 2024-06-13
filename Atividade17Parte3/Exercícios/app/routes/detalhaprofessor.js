module.exports = function (app) {
    app.get('/informacao/professores/detalhaprofessores', function (req, res) {

        async function getProfessoresID() {
            try {
                var connection = app.config.dbConnection;

                const pool = await connection();

                var professoresModel = app.models.professormodel;

                professoresModel.getProfessor(pool, function (error, results) {
                    res.render('informacao/professores/detalhaprofessores', { profs: results.recordset });
                });
            } catch (err) {
                console.log(err)
            }
        }

        getProfessoresID();
    });
}