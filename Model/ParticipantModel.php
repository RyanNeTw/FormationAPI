<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class ParticipantModel extends Database
{
    public function getParticipant($limit)
    {
        return $this->select("SELECT * FROM participants LIMIT ?", ["i", $limit]);
    }

    public function creatParticipant($firstName, $lastName, $company, $idFormation)
    {
        return $this->select("INSERT INTO participants ('firstName', 'lastName', 'company', 'idFormation') VALUES ( ?, ?, ?, ?)", ["firstName", $firstName], ["lastName", $lastName], ["company", $company], ["idFormation", $idFormation]);
    }
    public function deleteParticipant($id)
    {
        return $this->select("DELETE FROM participants WHERE id = ? ", ["id", $id]);
    }
    public function updateParticipant($id, $firstName, $lastName, $company, $idFormation)
    {
        return $this->select("UPDATE participants SET firstName = ?, lastName = ?, company = ?, idFormation = ? WHERE id = ? ",["firstName", $firstName], ["lastName", $lastName], ["company", $company], ["idFormation", $idFormation], ["id", $id]);
    }
}