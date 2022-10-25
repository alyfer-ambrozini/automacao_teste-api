import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in'
let idUser = ''

test('Cadastre um novo usuário', async ({ request }) => {
  const newUser = await request.post(`${BASE_URL}/api/users`, {
    data: {
      "name": "alyfer",
      "job": "QA"      
    }
  });
  expect(newUser.ok()).toBeTruthy();
  const body = JSON.parse(await newUser.text())  
  idUser = body.id  
  console.log(body)
  console.log(idUser)
});


test('Busque pelo ID do usuário cadastrado', async ({ request }) => {
  const searchUser = await request.get(`${BASE_URL}/api/users/2`, {
    data:{
      id: idUser
    }
  });
  expect(searchUser.ok()).toBeTruthy();
  const body = JSON.parse(await searchUser.text())
  console.log(body)
});


test('Atualize os dados do usuário', async ({ request }) => {
  const updateUser = await request.put(`${BASE_URL}/api/users/2`, {
    data: {
      "name": "morpheus",
      "job": "zion resident"
    }
  });
  expect(updateUser.ok()).toBeTruthy();
  const body = JSON.parse(await updateUser.text())
  console.log(body)
});


test('Delete o usuário', async ({ request }) => {
  const deleteUser = await request.delete(`${BASE_URL}/api/users/2`, {

  });
  expect(deleteUser.ok()).toBeTruthy();
});


test('Busque pelo ID do usuário que foi deletado', async ({ request }) => {
  const searchDelete = await request.get(`${BASE_URL}/api/users?page=2`, {
 
  });
  expect(searchDelete.ok()).toBeTruthy();
  const body = JSON.parse(await searchDelete.text())
  console.log(body)
});