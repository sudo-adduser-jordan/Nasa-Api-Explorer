import { test, expect } from '@playwright/test';

test.describe('Validate Routes', () => {
    test('Test Home Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Home' }).click();
        await expect(page).toHaveTitle(/Nasa Api Explorer/);
    });
    test('Test About Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'About' }).click();
        await expect(page).toHaveTitle(/About/);
        await expect(page).toHaveURL(/about/);
    });

    test('Test Apod Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Apod' }).click();
        await expect(page).toHaveTitle(/Apod/);
        await expect(page).toHaveURL(/apod/);
    });

    test('Test Image Library Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Image Library' }).click();
        await expect(page).toHaveTitle(/Image Library/);
        await expect(page).toHaveURL(/image-library/);
    });

    test('Test Video Library Page', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Video Library' }).click();
        await expect(page).toHaveTitle(/Video Library/);
        await expect(page).toHaveURL(/video-library/);
    });

    test('Test Mars Rover Photos Pages', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'Mars Rover Photos' }).click();
        await expect(page).toHaveTitle(/Mars Rover Photos/);
        await expect(page).toHaveURL(/mars-rover-photos/);

        await page.getByRole('link', { name: 'curiosity' }).click();
        await page.getByRole('link', { name: 'spirit' }).click();
        await page.getByRole('link', { name: 'opportunity' }).click();
    });
});

test.describe('Validate Metadata', () => {
    test('Test Apod Data', async ({ page }) => {});

    test('Test Image Library Data', async ({ page }) => {});

    test('Test Video Library Data', async ({ page }) => {});

    test('Test Mars Rover Photos Data', async ({ page }) => {});
});

test.describe('Validate Server Components', () => {
    test('Test getSearch Component', async ({ page }) => {});

    test('Test getSearchMore Component', async ({ page }) => {});

    test('Test getImages Component', async ({ page }) => {});

    test('Test getImagesMore Component', async ({ page }) => {});

    test('Test getVideos Component', async ({ page }) => {});

    test('Test getVideosMore Component', async ({ page }) => {});

    test('Test getManifest Component', async ({ page }) => {});

    test('Test getRover Component', async ({ page }) => {});
});

test.describe('Validate Client Components', () => {
    test('Test Search Component', async ({ page }) => {});

    test('Test Sidebar Component', async ({ page }) => {});

    test('Test Topbar Component', async ({ page }) => {});

    test('Test Marsbar Component', async ({ page }) => {});
});

test.describe('Validate Pages', () => {
    test('Test Apod Data', async ({ page }) => {});

    test('Test Image Library Data', async ({ page }) => {});

    test('Test Video Library Data', async ({ page }) => {});

    test('Test Mars Rover Photos Data', async ({ page }) => {});
});

test.describe('Validate Data', () => {
    test('Test Apod Data', async ({ page }) => {});

    test('Test Image Library Data', async ({ page }) => {});

    test('Test Video Library Data', async ({ page }) => {});

    test('Test Mars Rover Photos Data', async ({ page }) => {});
});
