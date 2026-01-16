// src/scripts/utils/api.js
import { config } from '../config'; // Import config global kita

/**
 * 1. GET DATA (Untuk mengambil data)
 * Contoh: getData('/users')
 */
export async function getData(endpoint) {
  try {
    const response = await fetch(`${config.apiBaseUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // Cek apakah responnya JSON atau bukan (untuk jaga-jaga kalau server error HTML)
    const result = await handleResponse(response);

    return {
      ok: response.ok,
      status: response.status,
      data: result
    };

  } catch (error) {
    console.error("Gagal ambil data:", error);
    return {
      ok: false,
      status: 500,
      data: { message: "Gagal terhubung ke server (Network Error)." }
    };
  }
}

/**
 * 2. POST DATA (Untuk tambah data baru)
 * Contoh: postData('/users', { nama: 'Budi', umur: 20 })
 */
export async function postData(endpoint, body) {
  try {
    const response = await fetch(`${config.apiBaseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Ubah data object jadi JSON string
    });

    const result = await handleResponse(response);

    return {
      ok: response.ok,
      status: response.status,
      data: result
    };

  } catch (error) {
    console.error("Gagal kirim data:", error);
    return {
      ok: false,
      status: 500,
      data: { message: "Gagal terhubung ke server (Network Error)." }
    };
  }
}

/**
 * 3. PUT DATA (Untuk update/edit data)
 * Contoh: putData('/users/1', { nama: 'Budi Hartono' })
 */
export async function putData(endpoint, body) {
  try {
    const response = await fetch(`${config.apiBaseUrl}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await handleResponse(response);

    return {
      ok: response.ok,
      status: response.status,
      data: result
    };

  } catch (error) {
    console.error("Gagal update data:", error);
    return {
      ok: false,
      status: 500,
      data: { message: "Gagal terhubung ke server." }
    };
  }
}

/**
 * 4. DELETE DATA (Untuk hapus data)
 * Contoh: deleteData('/users/1')
 */
export async function deleteData(endpoint) {
  try {
    const response = await fetch(`${config.apiBaseUrl}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const result = await handleResponse(response);

    return {
      ok: response.ok,
      status: response.status,
      data: result
    };

  } catch (error) {
    console.error("Gagal hapus data:", error);
    return {
      ok: false,
      status: 500,
      data: { message: "Gagal terhubung ke server." }
    };
  }
}

/**
 * HELPER: Fungsi kecil untuk cek apakah responnya JSON valid atau text biasa (HTML error)
 * Ini biar kodingan di atas gak panjang-panjang nulis ulang logika yang sama.
 */
async function handleResponse(response) {
  const contentType = response.headers.get("content-type");
  
  // Kalau server mbalikin JSON, kita parse jadi JSON
  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  } 
  // Kalau bukan JSON (misal error HTML dari server), kita ambil text-nya aja
  else {
    return { message: await response.text() };
  }
}