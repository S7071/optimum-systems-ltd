# DNS Record Changes

## Domain

`optimumsystems.co.ke`

---

## Required DNS Updates

| Host / Name | Record Type | Action | Value |
|---|---:|---|---|
| `optimumsystems.co.ke` | `A` | Add | `35.219.200.193` |
| `optimumsystems.co.ke` | `A` | Remove | `102.218.215.9` |
| `optimumsystems.co.ke` | `TXT` | Add | `fah-claim=023-02-1bd92fb6-bc8c-45f7-8ae6-2f515acedec7` |
| `_acme-challenge_vixra2qeem3brcwf.optimumsystems.co.ke` | `CNAME` | Add | `879ad570-7eba-448d-85ef-e943079b9b26.9.authorize.certificatemanager.goog.` |

---

## Notes

- Remove the existing `A` record pointing to `102.218.215.9`.
- Add the new `A` record pointing to `35.219.200.193`.
- Ensure the CNAME target keeps the trailing dot if your DNS provider supports it.
- DNS propagation may take some time depending on the provider TTL settings.