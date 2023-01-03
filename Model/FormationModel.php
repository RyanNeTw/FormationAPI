<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class FormationModel extends Database
{
    public function getFormation($limit)
    {
        return $this->select("SELECT * FROM formations LIMIT ?", ["i", $limit]);
    }

    public function creatFormation($name, $startDate, $endDate, $maxParticipants)
    {
        return $this->select("INSERT INTO formations ('name', 'startDate', 'endDate', 'maxParticipants') VALUES ( ?, ?, ?, ?)", ["name", $name], ["startDate", $startDate], ["endDate", $endDate], ["maxParticipants", $maxParticipants]);
    }
    public function deleteFormation($id)
    {
        return $this->select("DELETE FROM formations WHERE id = ? ", ["id", $id]);
    }
    public function updateFormation($id, $name, $startDate, $endDate, $maxParticipants)
    {
        return $this->select("UPDATE formations SET name = ?, startDate = ?, endDate = ?, maxParticipants = ? WHERE id = ? ",["name", $name], ["startDate", $startDate], ["endDate", $endDate], ["maxParticipants", $maxParticipants], ["id", $id]);
    }
}