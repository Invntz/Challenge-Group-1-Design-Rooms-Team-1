from fastapi import APIRouter, HTTPException

from app.schemas.signUpSchema import Signup, SignupBase
from app.utils.config import get_db

router = APIRouter()


# fetch designs
@router.get("/")
def get_designs():
    return


# post designs
@router.post("/")
def post_design():
    return


# fetch a single design
@router.get("/{id}")
def get_design(id: int):
    return


# update a single design
@router.put("/{id}")
def update_design(id: int):
    return


# delete a design
@router.delete("/{id}")
def delete_design(id: int):
    return


# post request to add collaborator to design
@router.post("/{id}/collaborators")
def post_collaborator():
    return


# get request to return info on collaborators
@router.get("/{id}/collaborators")
def get_collaborators():
    return


# delete request with id for collaborators
@router.delete("/{id}/collaborators/{collaboratorId}")
def delete_collaborator():
    return


#
@router.post("/{id}/comments")
def post_design_comments():
    return


@router.get("/{id}/comments")
def get_design_comments():
    return


@router.post("/{id}/resume")
def post_resume_design():
    return